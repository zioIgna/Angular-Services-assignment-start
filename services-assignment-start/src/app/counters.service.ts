export class CountersService{
    activeToInactive = 0;
    inactiveToActive = 0;

    incrementInactive(){
        this.activeToInactive++;
        console.log('Active to inactive = ' + this.activeToInactive);
    }

    incrementActive(){
        this.inactiveToActive++;
        console.log('Inactive to active = ' + this.inactiveToActive);
    }
}