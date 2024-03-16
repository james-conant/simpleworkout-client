import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export const useFetchUser = async () => {
  const accessToken = await AsyncStorage.getItem("token");

  if (accessToken) {
    const tokenUser = jwtDecode(accessToken);
    try {
      const result = await axios.get(
        `http://localhost:8084/api/users/auth0/${tokenUser.sub}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      return result.data;
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }
};

export const getUserMetadata = async (userId: any, accessToken: any) => {
  const apiUrl = `https://dev-sw6s7q1oda2gdtei.us.auth0.com/api/v2/users/${userId}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);

    return response;
  } catch (error) {
    console.error("Error fetching user metadata:", error);
    throw error;
  }
};
