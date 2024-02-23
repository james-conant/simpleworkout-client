import axios from "axios";

const defaultUserId = 1;
const defautPlanId = 1;

export const getAllPlans = async (id: number) => {
  try {
    const response = await axios.get("http://localhost:8084/api/plans", {
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

export const getPlan = async (id: number) => {
  try {
    const response = await axios.get(
      `http://localhost:8084/api/weeks/plan/${id || defautPlanId}`,
      {
        headers: {
          userId: defaultUserId,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

// Add more API calls as needed
