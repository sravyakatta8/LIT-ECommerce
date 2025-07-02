import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div
        className="hidden lg:flex items-center justify-center w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/doykimzpk/image/upload/v1751434094/ChatGPT_Image_Jul_2_2025_02_15_20_AM_anwdjd.png")`,
        }}
      >
        
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
