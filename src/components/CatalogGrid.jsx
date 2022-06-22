import { CategoryCounter, CategoryItem } from "./CategoryItem";
import styled from "@emotion/styled";
import { LinkBase } from "../customatizations/LinkBase";
import GridItem from "./GridItem";
import { NotFoundPage } from "./NotFoundPage";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  width: 100%;
`

export function CatalogGrid({ categories }) {
    return (
        <>
            {categories == false ? <NotFoundPage message="Нет товаров" /> : <Grid>
                {categories?.map((category) => (

                    <GridItem categories={category} />

                ))}
            </Grid>}
        </>

    )
}
