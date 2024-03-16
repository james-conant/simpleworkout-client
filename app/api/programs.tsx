import axios from "axios";

export const getAllProgramsByUser = async (id: number) => {
  try {
    const response = await axios.get("http://localhost:8084/api/programs", {
      headers: {
        userId: id,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
