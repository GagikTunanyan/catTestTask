import React, { memo, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, selectedCategory } from "../../redux/action/categories";
import { RootState } from "../../types/global_state_types";
import { category_item_type } from "../../types/types_categories";

const SidebarWrapper = styled.div`
    width: 100%;
    height: 60px;
    background-color: black;
    display: flex;
    align-items: center;
    padding: 0 15px;
    justify-content: space-around;
    box-sizing: border-box;
`;

const CategoriesItem = styled.p<{ selected: boolean }>`
    color: white;
    text-transform: capitalize;
    ${({selected}) => !!selected && css`color: orange;`}
`

const TopSidebarForTablet: React.FC = memo(() => {
    const dispatch = useDispatch();
    const { data, error, isRequested, selected } = useSelector((state: RootState) => state.categories);
    
    const handleSelectedCategories = useCallback((id: number) => {
        return () => {
            dispatch(selectedCategory(id));
        }
    }, []);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <SidebarWrapper >
            {data.map((item: category_item_type, index) => {
                const { name, id } = item;
                return (
                    <CategoriesItem 
                        key={id+index}
                        onClick={handleSelectedCategories(id)}
                        selected={id === selected}
                    >
                        {name}
                    </CategoriesItem>
                )
            })}
        </SidebarWrapper>
    )
});

export default TopSidebarForTablet;