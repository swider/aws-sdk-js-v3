import {Structure as _Structure_} from '@aws/types';

export const UpdateBatchPredictionOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        BatchPredictionId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};