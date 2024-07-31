import VanElement from "./VanElement";

export default function Vans({ vans }) {
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vans.map((van, i) => (
          <VanElement van={van} key={van.id * i} />
        ))}
      </div>
    </div>
  );
}
