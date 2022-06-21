import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import { ListCount } from './ListCount';
import styled from "@emotion/styled";
import List from '@mui/material/List';
import { ListItem } from "@mui/material";
import { LinkBase } from '../customatizations/LinkBase';

const Wrapper = styled(List)`
  width: 250px;
  padding: 5px;
`

const StyledListItem = styled(ListItem)`

&:hover {
  background: rgb(43, 135, 171);
  color: white;
}

${({ active }) => active && ({
        background: "white",
        color: "white",
    })}

`



export default function GutterlessList({ categories, limit }) {
    const [expanded, setExpanded] = React.useState(false)
    const [selectedCategory, setSelectedCategory] = React.useState(null);

    const visibleCategories = React.useMemo(() => {
        return (categories ?? []).slice(0, expanded ? undefined : limit)
    }, [categories, limit, expanded])

    const limitDiff = React.useMemo(() => {
        if (!limit || !categories) return 0
        return Math.max(categories.length - limit, 0)
    }, [limit, categories])

    return (
        <>
            <Wrapper sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {(visibleCategories ?? []).map((value) => (
                    <StyledListItem
                        key={value.id}
                        active={value === selectedCategory}
                        disableGutters
                        style={{ borderBottom: "1px solid #C8C8C8", padding: "0px" }}
                        onMouseEnter={() => { setSelectedCategory(value) }}

                    >
                        <LinkBase to={`/catalog?categoryId=${value.id}`}>
                            <ListItemText primary={<ListCount count={value} />} />
                        </LinkBase>

                    </StyledListItem>
                ))}
                {!!limitDiff && (
                    <div style={{ display: "flex", justifyContent: "left", alignItems: "center", color: "rgb(43, 135, 171)" }} onClick={() => setExpanded(!expanded)}>{expanded ? '-' : '+'}{limitDiff} категории</div>
                )}
            </Wrapper>

        </>

    );
}