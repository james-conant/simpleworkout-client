import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "@/context/AuthProvider";

const useFetchData: any = (url: string) => {
  url = "http://localhost:8084/api" + url;
  const [data, setData] = useState(null);

  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        try {
          const result = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              userId: user?.id,
            },
          });

          setData(result.data);
          return "getMeta";
        } catch (error) {
          console.error("Error with axios request:", error);
        }
      } catch (error) {
        console.error("Error fetching token from storage useFetchData:", error);
      }
    };

    fetchData();
  }, [url]);

  return data;
};

export default useFetchData;
