import { memo, useEffect, useState, useCallback } from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, selectedCategory } from "../../redux/action/categories";
import { RootState } from "../../types/global_state_types";
import { category_item_type } from "../../types/types_categories";
import WrappError from "../Error";
import Loading from "../Loading";

const LeftSidebarWrapper = styled.div`
    width: 20%;
    height: 100vh;
    padding: 20px 0;
    box-sizing: border-box;
    background-color: black;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    row-gap: 10px;
`;

const SidebarHead = styled.div`
    padding: 0 15px 20px;
    border-bottom: 1px solid white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`;

const SidebarTitle = styled.h5`
    color: white;
    margin: 0;
    font-size: 17px;
`;

const CategoriesListBody = styled.div`
    position: relative;
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const CategoriesItem = styled.div<{selected?: boolean}>`
    cursor: pointer;
    padding: 0 15px;
    box-sizing: border-box;
    width: 100%;
    background-color: black;
    transition: 0.1s;
    &:hover {
        background-color: #dfdcdc;
        p {
            color: black;
        }
    }
    ${({ selected }) => !!selected && (
        css`
            background-color: orange;
            &:hover {
                background-color: orange;
            }
        `
    )}
`;

const CategoriesItemName = styled.p`
    color: white;
    text-transform: capitalize;
    transition: 0.1s;
`

const LeftSidebar = memo(() => {
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
        <LeftSidebarWrapper>
            <SidebarHead>
                <SidebarTitle>Cat Categories</SidebarTitle>
            </SidebarHead>
            <CategoriesListBody>
                {!!isRequested && <Loading />}
                {!!error && <WrappError>{error}</WrappError>}
                {(!isRequested && !error) && (
                    data.map((item: category_item_type) => {
                        const { id, name } = item;
                        return (
                            <CategoriesItem
                                key={id}
                                selected={id === selected}
                                onClick={handleSelectedCategories(id)}
                            >
                                <CategoriesItemName>{name}</CategoriesItemName>
                            </CategoriesItem>
                        )
                    })
                )}
            </CategoriesListBody>
        </LeftSidebarWrapper>
    )
});

export default LeftSidebar;