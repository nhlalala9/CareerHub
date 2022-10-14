import { HomepageComponent } from "./homepage.component";

describe('HomepageComponent', () =>{
    it('mounts', () =>{
        cy.mount(HomepageComponent)
    })
})