const { useEffect } = require("react");

const useNotification = (tag) => {
  useEffect(() => {
    // registering the service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker registered", registration.scope);
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);

  const pushNotification = async (title, body) => {
    if (!("Notification" in window) || !("serviceWorker" in navigator)) {
      alert("This browser does not support notifications or service workers.");
      return;
    }
    const permission = await window.Notification.requestPermission();

    if (permission === "granted") {
      const registration = await navigator.serviceWorker.ready;
      registration.showNotification(title, {
        body: body,
        icon: "/bell.svg",
        tag,
      });

      //get notifications
      const notifications = await registration.getNotifications({ tag });
      notifications.forEach((notification) => {
        // event handler when the notification clicked
        notification.onclick = () => {
          console.log("notification clicked");
        };
      });
    } else {
      alert("Notification permission denied! Please allow notifications.");
      console.log("Notification permission denied!");
    }
  };
  return { pushNotification };
};

export default useNotification;
