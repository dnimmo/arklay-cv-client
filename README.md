# arklay-cv-client

This project is in-progress. You can view its current progress at http://arklay.surge.sh - note though that performance isn't amazing on Surge.sh; this is down to the platform (and it being free) rather than my code. :D 


The server-side functionality can be found at https://github.com/dnimmo/arklay-server (this is served via AWS API Gateway, with endpoints that are backed by AWS Lambda functions)


### sound

All sound effects are created on initial load rather than on-the-fly. The trade-off is that unfortunately I'm serving them all to the user even if they never get played, but without doing this there'd be a delay in sounds playing on slower networks.
