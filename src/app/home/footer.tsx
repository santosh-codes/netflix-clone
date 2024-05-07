import React from "react";

function Footer() {
  return (
    <div className="py-14 flex items-center justify-center gap-44 text-[#B3B3B3] underline text-base">
      <div className="flex flex-col gap-5">
        <p>Questions? Contact us</p>
        <p>FAQ</p>
        <p>Investor Relations</p>
        <p>Privacy</p>
        <p>Speed Test</p>
        <form>
          <select className="text-white font-bold bg-black border-[#615E5F] rounded-md border px-2 py-1">
            <option value="English">水A English</option>
          </select>
        </form>
        <a style={{ textDecoration: "none" }} className="">
          Netflix Nepal
        </a>
      </div>
      <div className="flex flex-col gap-3">
        <p>Help Center</p>
        <p>Jobs</p>
        <p>Cookie Preferences</p>
        <p>Legal Notices</p>
      </div>
      <div className="flex flex-col gap-3">
        <p>Account</p>
        <p>Ways to Watch</p>
        <p>Corporate Information</p>
        <p>Only on Netflix</p>
      </div>
      <div className="flex flex-col gap-3">
        <p>Media Center</p>
        <p>Terms of Use</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
}

export default Footer;
