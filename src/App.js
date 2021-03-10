import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "KFC",
    image:
      "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_656/https://www.milanoevents.it/wp-content/uploads/2016/08/Kfc-milano.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "Popeyes",
    image:
      "https://www.gannett-cdn.com/presto/2018/08/08/PHGL/8a55dc95-fb75-4711-8fde-8ea221478845-Popeyesjpg.jpg?crop=729,412,x0,y70&width=2560",
    rating: 3.8,
  },
  {
    id: 3,
    name: "Yamyam chicken",
    image:
      "https://jesspryles.com/wp-content/uploads/2018/01/korean-fried-chicken-24.jpg",
    rating: 4.9,
  },
];

Food.propTypes = {
  // PropTypes 가 아님에 유의!
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function Food({ name, image, rating }) {
  return (
    <div>
      <h2>I Love {name}</h2>
      <h4>Rating: {rating}/5</h4>
      <img src={image} alt={name} width="320px" height="180px" />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map((plate) => (
        <Food
          key={plate.id}
          name={plate.name}
          image={plate.image}
          rating={plate.rating}
        />
      ))}
    </div>
  );
}

export default App;
