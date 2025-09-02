import { pb } from "../App";

let brandData;

export const useBrandData = async () => {
  if (!brandData) {
    //Get subdomain
    const hostname = window.location.hostname; // e.g. "blog.example.com"
    const parts = hostname.split(".");
    let subdomain = "default";

    if (parts.length > 2) subdomain = parts[0];

    //Get brand data
    try {
      pb.autoCancellation(false);
      const record = await pb
        .collection("brands")
        .getFirstListItem(`subdomain="${subdomain}"`, { autoCancel: false });
      brandData = record;
      console.log(record);
    } catch (error) {
      console.log(`Brand not found with subdomain: ${subdomain}`);
    }
  }

  return brandData;
};
