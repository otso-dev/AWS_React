/** @jsxImportSource @emotion/react */
import * as S from "./style";
import React from "react";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Navigation } from "react-minimal-side-navigation/lib";
import { HiHome } from "react-icons/hi";
import { GrTest } from "react-icons/gr";
import { BsCardChecklist } from "react-icons/bs";
import { BiListCheck } from "react-icons/bi";
import Icon from "awesome-react-icons";
import { useNavigate } from "react-router-dom";

const MainAside = () => {
  const navigate = useNavigate();

  return (
    <aside css={S.style}>
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId="/"
        onSelect={({ itemId }) => {
          navigate(itemId);
        }}
        items={[
          {
            title: "Home",
            itemId: "/",
            elemBefore: () => <HiHome />,
          },
          {
            title: "T1",
            itemId: "/t1",
            elemBefore: () => <Icon name="check" />,
          },
          {
            title: "T2",
            itemId: "/t2",
            elemBefore: () => <GrTest />,
          },
          {
            title: "sample",
            itemId: "/sample/input",
            elemBefore: () => <BsCardChecklist />,
            subNav: [
              {
                title: "input1",
                itemId: "/sample/input/1",
                elemBefore: () => <BiListCheck />,
              },
            ],
          },
          {
            title: "List",
            itemId: "/users",
            elemBefore: () => <Icon name="users" />,
            subNav: [
              {
                title: "사용자 전체 조회",
                itemId: "/users/1",
                elemBefore: () => <Icon name="user" />,
              },
            ],
          },
        ]}
      />
    </aside>
  );
};

export default MainAside;
