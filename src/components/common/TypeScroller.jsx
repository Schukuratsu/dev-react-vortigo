import React from "react";
import { Typography } from "antd";

function TypeScroller({ onChange, value, className = "", ...props }) {
  // eslint-disable-next-line no-unused-vars
  const [typeList, setTypeList] = React.useState([
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/normal.png",
      name: "normal",
    },
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/fighting.png",
      name: "fighting",
    },
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/flying.png",
      name: "flying",
    },
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/poison.png",
      name: "poison",
    },
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/ground.png",
      name: "ground",
    },
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/rock.png",
      name: "rock",
    },
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/normal.png",
      name: "normal",
    },
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/fighting.png",
      name: "fighting",
    },
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/flying.png",
      name: "flying",
    },
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/poison.png",
      name: "poison",
    },
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/ground.png",
      name: "ground",
    },
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/rock.png",
      name: "rock",
    },
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/normal.png",
      name: "normal",
    },
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/fighting.png",
      name: "fighting",
    },
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/flying.png",
      name: "flying",
    },
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/poison.png",
      name: "poison",
    },
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/ground.png",
      name: "ground",
    },
    {
      thumbnailImage:
        "https://vortigo.blob.core.windows.net/files/pokemon/assets/rock.png",
      name: "rock",
    },
  ]);

  // React.useEffect(
  //   () => pokemonTypeApi.list().then((response) => setTypeList(response)),
  //   []
  // );

  return (
    <div className={`type-scroller row ${className}`} {...props}>
      {typeList.map((type) => (
        <div
          className="type-scroller-item column align-center"
          key={type.name}
          {...props}
        >
          <img
            src={type.thumbnailImage}
            alt={type.name}
            className="type-scroller-image"
          />
          <Typography className="type-scroller-text">{type.name}</Typography>
        </div>
      ))}
    </div>
  );
}

export default TypeScroller;
