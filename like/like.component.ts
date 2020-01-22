export class LikeComponent {
    constructor(private _likesCount: number, private _isSelected: boolean) {
    }

    public get likesCount(): number {
        return this._likesCount;
    }

    public get isSelected(): boolean {
        return this._isSelected;
    }

    onClick() {
        if (this._isSelected) {
            this._likesCount--;
        } else {
            this._likesCount++;
        }

        this._isSelected = !this._isSelected;
    }
}
