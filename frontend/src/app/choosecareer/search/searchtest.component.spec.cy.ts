import { TestBed } from "@angular/core/testing";
import { CategoryService } from "src/app/services/category.service";
import { GetcareerService } from "src/app/services/getcareer.service";
import { RoutingService } from "src/app/services/routing.service";
import { SearchComponent } from "./search.component";
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { Input } from "@angular/core";
import { SearchfilterPipe } from "src/app/pipes/searchfilter.pipe";

describe("testing the search component", () => {

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [
            SearchfilterPipe,
          ],
        providers: [RoutingService, CategoryService, GetcareerService]
      }));

    it('finds search bar', () => {
        cy.mount(SearchComponent)
        cy.get('Input')
    });

    it('type in search bar', () => {
        cy.mount(SearchComponent)
        cy.get('Input').type('design').should('have.value','design')
    });

    it("find browse button and click", ()=>{
        cy.mount(SearchComponent)
       cy.get('button').click()
    })
    
    it('click',()=>{
        cy.mount(SearchComponent)
        cy.get('button').contains('Browse').click()
    })
})