import React, { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../types/global_state_types";
import { getCats, handleLoadMore } from "../../redux/action/cats";
import Loading from "../../components/Loading";
import WrappError from "../../components/Error";
import CatCard from "../../components/CatCard";
import { cat_item_type } from "../../types/types_cats";

import styled from "styled-components";

const ImagesWrapper = styled.div`
    width: 100%;
    padding: 20px 0;
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    @media (min-width: 550px) and (max-width: 800px) {
        justify-content: center;
        .cat--card--item {
            width: calc(50% - 10px) !important;
            img {
                width: 100%;
            }
        }
    };
    @media(max-width: 550px) {
        justify-content: center;
        .cat--card--item {
            width: calc(100%) !important;
            img {
                width: 100%;
            }
        }
    };
`;

const LoadMoreBtnWarpp = styled.div`
    display: flex;
    alidn-items: center;
    justify-content: center;
`
const LoadMoreBtn = styled.button`
    background-color: #0072ffc7;
    font-weight: bolder;
    boreder: none;
    color: black;
    height: 35px;
    width: 200px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

const CatImages: React.FC = memo(() => {
    const { data, isRequested, error, page } = useSelector((state: RootState) => state.cats);
    const { selected } = useSelector((state: RootState) => state.categories);
    const dispatch = useDispatch();

    const handleLoadMoreClick = useCallback((page: number) => {
        return () => {
            dispatch(handleLoadMore(page));
        };
    }, []);

    useEffect(() => {
        dispatch(getCats(page, selected));
    }, [selected, page])

    return (
        <>
            <ImagesWrapper>
                {!!isRequested && <Loading />}
                {!!error && <WrappError>{error}</WrappError>}
                {(!isRequested && !error) && (
                    data.map((item: cat_item_type, index) => {
                        const { url, id } = item;
                        return (
                            <CatCard url={url} key={id+index} />
                        )
                    })
                )}
            </ImagesWrapper>
            <LoadMoreBtnWarpp>
                <LoadMoreBtn onClick={handleLoadMoreClick(page+1)}>Load More</LoadMoreBtn>
            </LoadMoreBtnWarpp>
        </>
    )
});

export default CatImages