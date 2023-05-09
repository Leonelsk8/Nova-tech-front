import cloudinary from "cloudinary-core";
import {Cloudinary} from '@cloudinary/url-gen'

const cloudinaryCore = new cloudinary.Cloudinary({
    cloud_name: "dmatthmhw",
    api_key: import.meta.env.CLOUDINARY_API_KEY,
    api_secret: import.meta.env.CLOUDINARY_API_SECRET
});

export default cloudinaryCore;