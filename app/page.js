"use client";
import Image from "next/image";
export default function Home() {
  const pushNotification = async () => {
    // check the permission of the browser
    const permission = await window.Notification.requestPermission();

    //check if permission granted
    if (permission == "granted") {
      // create the notification object
      const notification = new window.Notification("Sample Notification", {
        body: "Lorem ipsum dolor sit amet.",
        icon: "/bell.svg",
      });

      // notification onclick event handler
      notification.onclick = () => {
        console.log("Notification pushed");
      };
    } else {
      alert("Notification permission denied! allow the show Notifications");
      console.log("Notification permission denied!");
    }
  };
  return (
    <div className="flex flex-col py-10 gap-10 items-center h-screen bg-gradient-to-b from-[#2C2143] from-40% to-black">
      <p>Hola!</p>
      {/* notification element */}
      <div className="p-8 rounded-full shadow-full shadow-[#493182]">
        <div className="p-8 border border-[#644D9A] rounded-full">
          <div className="p-8 border border-[#644D9A] rounded-full">
            <div className="bg-[#2F1A61] rounded-full">
              <Image src="/bell.svg" alt="bell" height={200} width={200} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[400px] p-5 text-center flex flex-col gap-5">
        <h2 className="text-3xl font-semibold">Lorem Ipsum...</h2>
        <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
        <button
          className="bg-[#1D103A] w-full p-2 border-2 border-[#6434CE] font-semibold rounded-md"
          onClick={pushNotification}
        >
          Send Notification
        </button>
      </div>
    </div>
  );
}
