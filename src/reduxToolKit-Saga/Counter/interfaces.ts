export interface iCounterState {
    value: number,
    status: 'idle' | 'loading' | 'failed';
}