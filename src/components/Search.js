import { useState, useContext } from 'react';
import { Context } from "./ContextProvider";
import { InputGroup, FormControl, Button, Spinner } from "react-bootstrap";
import { filterData } from "../utils/filter";
import {SearchPreview} from "./SearchPreview";

function Search() {
    const [result, setResult] = useState({});
    const [url, setUrl] = useState("");
    const [preview, setPreview] = useState(false);
    const [search, setSearch] = useState(false);
    const [dataBookMarks, actions] = useContext(Context);

    function handleSubmit(e) {
        e.preventDefault();
        if (search) return;
        setSearch(true)
        fetch(`http://localhost:9000/testAPI${"?url=" + url}`)
            .then(res => res.json())
            .then(res => {
                setResult(res);
                setPreview(true);
                setSearch(false);
            }).catch(() => {
                setSearch(false);
            })
    }

    return (
        <div id="search" >
            <p>https://vimeo.com/130094877</p>
            <p>https://flic.kr/p/2kqnPAG</p>
            <form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>URL :</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-describedby="basic-addon1" onChange={(e) => setUrl(e.target.value)} />
                    <InputGroup.Append>
                        <Button type="submit" variant={search ? "outline-secondary" : "outline-primary"} >
                            {search && <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />}
                            {search ? "Loading..." : "Search"}
                        </Button>

                    </InputGroup.Append>
                </InputGroup>

            </form>

             <div id="previewSearch">                   
            <SearchPreview preview={preview} result={result} onDiscard={() => setPreview(false)} onSave={() => actions.prepend(filterData(result.msg))} />
            </div>
        </div>
    );
}




export default Search;

