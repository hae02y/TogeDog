/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { coordinateType, enrollMapType } from "../types/mapType";
import { getPetMap, postMap } from "../services/mapService";
import { useNavigate } from "react-router-dom";

// 맵 좌표 등록
export const usePostMap = (enrollMap: enrollMapType): any => {
  const navigator = useNavigate();
  return useMutation({
    mutationFn: async () => {
      return postMap(enrollMap);
    },
    onSuccess: (res) => {
      res && navigator(`/feeds`);
      return;
    },
    onError: (err) => {
      alert(err);
      return;
    },
  });
};

export const usePetMap = (coordinate: coordinateType) => {
  return useMutation({
    mutationFn: async () => {
      return getPetMap(coordinate);
    },
    onSuccess: (res) => {
      console.log(res);
      return;
    },
    onError: (err) => {
      console.log(err);
      return;
    },
  });
};
