import React from "react";
import { Modal, List, Space, Typography } from "antd";
import radioOffIcon from "../../assets/radio-off.png";
import radioOnIcon from "../../assets/radio-on.png";
import closeIcon from "../../assets/close.png";

// import pokemonTypeApi from "../../api/pokemonTypeApi";

function PhraseText({ onChange, value, options, className = "", ...props }) {
  const { onCancel } = props;
  const [selectedValue, setSelectedValue] = React.useState(value);

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
        dataSource={options}
        size="large"
        header={
          <div className="row justify-between align-center">
            <div>Select your favorite pokémon type</div>
            {/* eslint-disable-next-line */}
            <img
              className="cursor-pointer"
              onClick={onCancel}
              src={closeIcon}
              alt="close"
            />
          </div>
        }
        renderItem={(item) => (
          <List.Item
            className="type-select-modal-list-item"
            key={item.name}
            actions={[
              <img
                key={`${item.name}-checkbox`}
                src={item.name === selectedValue ? radioOnIcon : radioOffIcon}
                id={item.name}
                alt="type checkbox"
                onClick={(evt) => setSelectedValue(evt.target.id)}
              />,
            ]}
          >
            <Space>
              <img
                src={item.thumbnailImage}
                alt={item.name}
                className="type-select-modal-image"
              />
              <Typography className="sentence-case">{item.name}</Typography>
            </Space>
          </List.Item>
        )}
      />
    </Modal>
  );
}

export default PhraseText;
