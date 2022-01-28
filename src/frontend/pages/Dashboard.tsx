import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from 'app/redux/store';

import LoadingSpinner from "../components/LoadingSpinner";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

import { action1, action2 } from "../store/actions/fooActions";
import { startReadingData } from "../store/actions/barActions";
import { fooStateType } from "../store/reducers/fooReducer";
import { barStateType } from "../store/reducers/barReducer";

const Dashboard = () => {
  const dispatch = useDispatch();
  const fooState: fooStateType =
    useSelector((state: RootState) => state.fooReducer);
  const barState: barStateType =
    useSelector((state: RootState) => state.barReducer);
  
  console.log("barState = ", barState);
  
  useEffect(() => {
    setTimeout(() => dispatch(startReadingData("Emad")), 2000);
    setTimeout(() => dispatch(action1), 4000);
    setTimeout(() => dispatch(action2(150)), 6000);
  }, []);

  return (
    <div>
      <Header title="Dashboard" />

      <PageTitle>Dashboard</PageTitle>

      <br />

      { barState.isLoading && (
        <LoadingSpinner />
      )}

      { barState.errorMessage && (
        <span>Error: {barState.errorMessage}</span>
      )}

      { !barState.isLoading && !barState.errorMessage &&
        barState.data && barState.data.length === 0 && (
        <span>No Data in Database</span>
      )}

      <ul>
        { !barState.isLoading && !barState.errorMessage &&
          barState.data && barState.data.length > 0 && (
          barState.data.map((d: any, i: number) => (
            <li key={i}>Data {i}: {d.value}</li>
          ))
        )}
      </ul>

      <br />
      Foo Value: {fooState}
    </div>
  );
};

export default Dashboard;
