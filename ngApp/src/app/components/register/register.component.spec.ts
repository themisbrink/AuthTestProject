import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterComponent } from './register.component';
import { User } from 'src/app/User';
import { of } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  // let service: AuthService; // real service
  const mockAuthService = jasmine.createSpyObj<AuthService>(['registerUser']);
  mockAuthService.registerUser.and.callFake(() => {
    return of({ email: 'themisbrnk@gmail.com', password: '1234' })
  })


  let fixture: ComponentFixture<RegisterComponent>;
  let httpMock: HttpTestingController;
  let user: User;

  beforeEach(() => {
    
    

    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [{
        provide: AuthService,
        useValue: mockAuthService
      }]
    });
    // service = TestBed.inject(AuthService); // real service


    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpMock = TestBed.inject(HttpTestingController);

    user = {
      email: 'themisbrnk@gmail.com',
      password: '1234'
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return a User object after registration', () => {
    mockAuthService.registerUser(user).subscribe(result => {
      console.log(result.email);
      
      expect(result).toBeTruthy();
      expect(result.email ).toBe("themisbrnk@gmail.com");
    });

    // const req = httpMock.expectOne("http://localhost:3000/api/register");
    // expect(req.request.method).toBe('POST');
    // req.flush({
    //   email: "themisbrnk@gmail.com",
    //   password: "1234"
    // })
  })
  // it('should create', () => {
  //   const service: AuthService = TestBed.get(AuthService);
  //   expect(service).toBeTruthy();
  // });
});
