// import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

function useRequestDelay(delayTime = 1000, initialData = []) {
  const [data, setData] = useState(initialData);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    async function delayFunc() {
      try {
        await delay(delayTime);
        // throw "Had Error";
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        // setIsLoading(false);
        setData(data);
      } catch (error) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        // setIsLoading(false);
        // setHasError(true);
        setError(error);
      }
    }
    delayFunc();
  }, []);

  function updateRecord(recordUpdated, doneCallback) {
    const newRecords = data.map(function (rec) {
      return rec.id === recordUpdated.id ? recordUpdated : rec;
    });

    async function delayFunction() {
      try {
        await delay(delayTime);
        if (doneCallback) {
          doneCallback();
        }
        setData(newRecords);
      } catch (error) {
        console.log("error thrown inside delayFunction", error);
      }
    }
    delayFunction();
  }

  return {
    // isLoading, hasError,
    requestStatus,
    error,
    data,
    updateRecord,
  };
}

export default useRequestDelay;
