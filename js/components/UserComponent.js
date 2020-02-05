export default {
    props: ['liveuser'], 

    templates: `
        <div class="col-sm-12">
            <p>{{ liveuser.username }}</p>
        </div>
    `
}