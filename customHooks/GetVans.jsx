import { useState, useEffect } from "react";
function GetVans() {
  const [vans, setVans] = useState([]);
  useEffect(function () {
    const fetchVans = async function () {
      try {
        const res = await fetch("api/vans");
        const data = await res.json();

        setVans(data.vans);
      } catch {}
    };
    fetchVans();
  }, []);
  return vans;
}

export default GetVans;
