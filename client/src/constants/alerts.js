import { toast } from "react-toastify";

const notifySuccess = (text) => {
  toast.success(text, {
    position: toast.POSITION.TOP_CENTER,
  });
};

const notifyError = (text) => {
  toast.error(text, {
    position: toast.POSITION.TOP_CENTER,
  });
};

export { notifyError, notifySuccess };
