import React from "react";
import { Modal, List } from "antd";
import radioOffIcon from "../../assets/radio-off.png";
import radioOnIcon from "../../assets/radio-on.png";
import closeIcon from "../../assets/close.png";

// import pokemonTypeApi from "../../api/pokemonTypeApi";

function PhraseText({ onChange, value, className = "", ...props }) {
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

  const [selectedValue, setSelectedValue] = React.useState(value);

  // React.useEffect(
  //   () => pokemonTypeApi.list().then((response) => setTypeList(response)),
  //   []
  // );

  React.useEffect(() => setSelectedValue(value), [value]);

  const onOk = () => {
    onChange(selectedValue);
    props.onCancel();
  };

  return (
    <Modal
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{
        block: true,
        size: "large",
        type: "primary",
        className: "large-button",
      }}
      okText="Confirm"
      onOk={onOk}
      closable={false}
      className={`type-select-modal ${className}`}
      {...props}
    >
      <List
        className="type-select-modal-list"
        itemLayout="horizontal"
        dataSource={typeList}
        size="large"
        header={
          <div className="row justify-between align-center">
            <div>Select your favorite pokémon type</div>
            <img src={closeIcon} alt="close" />
          </div>
        }
        renderItem={(item) => (
          <List.Item
            key={item.name}
            actions={[
              // eslint-disable-next-line
              <img
                key={`${item.name}-checkbox`}
                src={item.name === selectedValue ? radioOnIcon : radioOffIcon}
                id={item.name}
                alt="type checkbox"
                onClick={(evt) => setSelectedValue(evt.target.id)}
              />,
            ]}
          >
            <img src={item.thumbnailImage} alt={item.name} />
            {item.name}
          </List.Item>
        )}
      />
    </Modal>
  );
}

export default PhraseText;
