Load procedure:
    1. index.html should contain everything to load the basic page. Use base64 data that is converted by scripts if needed.
    2. Run common_init()
        - Check that the server is up, and fetch the client version.
        - Use cached static files from local storage if the client version hasn't changed.
    3. Load module specific files. 
    4. Run module_init()
    