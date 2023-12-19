"use client";

import grabUsername from "../../actions/grabUsername";
import { useState } from "react";
import { redirect } from "next/navigation";
import SubmitButton from "../buttons/SubmitButton";
import { FaArrowRight } from "react-icons/fa";

const UsernameForm = ({ desiredUsername }) => {
  const [taken, setTaken] = useState(false);
  async function handleSubmit(formData) {
    const result = await grabUsername(formData);
    setTaken(result === false);
    if (result) {
      redirect("/account?created=" + formData.get("username"));
    }
  }

  return (
    <form action={handleSubmit}>
      <h1 className="mb-2 text-4xl font-bold text-center">
        Grab your username
      </h1>
      <p className="mb-2 text-center text-gray-500">Choose your username</p>
      <div className="max-w-xs mx-auto">
        <input
          type="text"
          name="username"
          defaultValue={desiredUsername}
          className="block w-full p-2 mx-auto mb-2 text-center border"
          placeholder="username"
        />
        {taken && (
          <div className="p-2 mb-2 text-center bg-red-200 border border-red-500">
            This username is taken
          </div>
        )}
        <SubmitButton>
          <span>Claim username</span>
          <FaArrowRight />
        </SubmitButton>
      </div>
    </form>
  );
};

export default UsernameForm;
