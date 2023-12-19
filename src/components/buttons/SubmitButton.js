import { useFormStatus } from "react-dom";

const SubmitButton = ({ children }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex items-center justify-center block w-full gap-2 px-4 py-2 mx-auto text-white bg-blue-500 disabled:bg-blue-300 disabled:text-gray-200"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
