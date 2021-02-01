import {createClient} from 'contentful';

const client = createClient({
    space: __SPACE_ID__,
    accessToken: __ACCESS_TOKEN__,
});

client
    .getEntries({ 'sys.id': __EXAMPLE_ENTRY_ID__ })
    .then((response) => { console.log(response)});
