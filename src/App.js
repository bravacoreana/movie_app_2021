function Food({ name, image }) {
  console.log(name);
  return (
    <div>
      <h1>I Love {name}</h1>
      <img src={image} />
    </div>
  );
}

const foodILike = [
  {
    name: "KFC",
    image:
      "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_656/https://www.milanoevents.it/wp-content/uploads/2016/08/Kfc-milano.jpg",
  },
  {
    name: "Popeyes",
    image:
      "https://www.gannett-cdn.com/presto/2018/08/08/PHGL/8a55dc95-fb75-4711-8fde-8ea221478845-Popeyesjpg.jpg?crop=729,412,x0,y70&width=2560",
  },
  {
    name: "Yamyam chicken",
    image:
      "https://jesspryles.com/wp-content/uploads/2018/01/korean-fried-chicken-24.jpg",
  },
];

function App() {
  return (
    <div>
      <h1>Guess what!</h1>
      {foodILike.map((plate) => {
        return <Food name={plate.name} image={plate.image} />;
      })}
    </div>
  );
}

export default App;
