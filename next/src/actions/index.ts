"use server";

export type Message = {
  message: string;
};

const initialState = {
  message: "",
};

export async function create(
  prevState: typeof initialState | null,
  formData: FormData,
) {
  const name = formData.get("message");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    message: `success: ${formData.get("message")}`,
  };
}

export async function post(message: Message["message"]) {
  await new Promise((res) => setTimeout(res, 1000));

  return message;
}