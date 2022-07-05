import styled from "styled-components"
export const Content = styled.div`
    .newsongslist_main {
        &.active {
            display: block;
        }
        .newsongslist_ul {
            flex-wrap: wrap;
            &.active {
                display: flex;
            } 
        }}`
