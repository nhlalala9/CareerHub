import { TestBed } from "@angular/core/testing";
import { CategoryService } from "src/app/services/category.service";
import { GetcareerService } from "src/app/services/getcareer.service";
import { RoutingService } from "src/app/services/routing.service";
import { SearchComponent } from "./search.component";
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { Input } from "@angular/core";

describe("testing the search component", () => {

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
        providers: [RoutingService, CategoryService, GetcareerService]
      }));

    it('mounts', () => {
        cy.mount(SearchComponent)
        cy.get('Input') 
    });
    it("mounts", ()=>{
        cy.mount(SearchComponent)
       cy.get('button').click()
    })
})