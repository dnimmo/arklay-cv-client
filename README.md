# arklay-cv-client

This project is in-progress. You can view its current progress at http://arklay.surge.sh


## development

### sound

(Explanation here of how triggering sound effects works)

All sound effects are created on initial load rather than on-the-fly. The trade-off is that unfortunately I'm serving them all to the user even if they never get played, but without doing this there'd be a delay in sounds playing on slower networks.
