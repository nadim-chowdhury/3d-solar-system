const PlanetInfo = ({ planet }) => {
  return (
    <div className="p-4 bg-gray-800 text-white">
      <h2 className="text-xl font-bold">{planet.name}</h2>
      <p>{planet.description}</p>
    </div>
  );
};

export default PlanetInfo;
