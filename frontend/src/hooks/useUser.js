import { useEffect, useState } from "react";
import { pb } from "../App";
import { useNavigate } from "react-router-dom";

export const useUser = () => {
  const [user, setUser] = useState(
    pb.authStore.isValid ? pb.authStore.record : false
  );
  useEffect(() => {
    pb.authStore.onChange(() => {
      if (pb.authStore.isValid) {
        setUser(pb.authStore.record);
      } else {
        setUser(false);
      }
    });
  }, []);

  const navigate = useNavigate();

  const isBrandOwner = () => {};

  const isAdmin = () => {
    if (!user) return false;
    return user.is_admin;
  };

  const getOwnedBrand = () => {};

  const login = async (email, password) =>
    pb.collection("users").authWithPassword(email, password);

  const logout = () => {
    pb.authStore.clear();
    navigate("/");
  };

  const register = () => {};

  return {
    user,
    isBrandOwner,
    isAdmin,
    getOwnedBrand,
    login,
    logout,
    register,
  };
};
