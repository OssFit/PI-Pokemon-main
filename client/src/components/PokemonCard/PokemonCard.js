
export function PokemonCard({ name, image, type, id}) {
  return (
    <div>
        <h3>{id}</h3>
        <h4>{name}</h4>
        
          {type.map((e) => {
            return (<p>{e.name}</p>);
          })}
      
        <img src={image} alt={name} width="200px" height="250px" />
    </div>
  );
}

