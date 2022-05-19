# Drinks On Me!

<p align="center">
  <img src="./src/images/pixel-cocktails.png" width="50%" />
</p>


<p>
A full stack social media app that lets users send money for drinks with a message to other users, and to spend that money at participating pubs. The app was built in the span of around one week, for my fourth project at General Assembly's Software Engineering Immersive course.
</p>

### Time Frame: 7 days, Solo.

## Deployed App
- Run the [deployed application](https://drinks-on-me-jtb.netlify.app/)!
  - Feel free to register and then use your own login credentials.

## Application Walkthrough
### Landing and Register
<p align="center">
  <img src="./src/images/landing.png" width="40%"  />
  <img src="./src/images/register.png" width="40%"  />
</p>

###  Login and Home
<p align="center">
  <img src="./src/images/login.png" width="40%"  />
  <img src="./src/images/home.png" width="40%"  />
</p>

### Transfer and Purchase
<p align="center">
  <img src="./src/images/transfer.png" width="40%"  />
  <img src="./src/images/purchase.png" width="40%"  />
</p>




## Tech Stack
### Front End
- JavaScript/HTML/CSS
- React.js Framework (Single Page Application)
- API Handling: Axios
- React-Router-Dom

### Back End
- Python
- Server: Django & Django Rest Framework
- Database: PostgreSQL
- Authentication: JSON Web Token (pyJWT)

### Development
- Git, GitHub
- Postman (API testing)
- Excalidraw (wireframing, planning)
- Npm & Pipenv
- Deployment:
  - Front End: Netlify
  - Back End: Heroku

## Features
- Top-up your account
- Send money for drinks with a personal message to other users
- Select from participating pubs
- Buy drinks at participating pubs
- Login, Register and Logout functionality
- View a history of transfers and messages
- View a history of drinks purchased


## Planning & Wireframing:
I imagined the app would be a mobile-first app, and started by planning the user experience. I decided upon the windows to be included, and the flow between them. Then I thought about the methods needed and the relationships to include in the backend. I wanted to do as much as possible in the backend using Django. I decided upon a retro 8-bit pixel art theme.

### Wireframe (Excalidraw):
<p align="center">
  <img src="./src/images/drinks-wireframe.png" width="80%"  />
</p>

### Entity Relationship Diagram (ERD via QuickDBD)
<p align="center">
  <img src="./src/images/drinks-erd.png" width="80%"  />
</p>

## Architecture:
The backend is built using Python and the Django Rest Framework to communicate with PostgreSQL database. The frontend is a React-powered single-page application. 
### Front End: 
- React Components to compartmentalise code
- React Hooks for component state management and handling side effects
- NES CSS framework for a fun retro feel
- Single Page Application (`react-router-dom`) using `Link`, `useNavigate`, `useLocation` and `useParams`
### Back End:
- 5 tables/models in PostgreSQL 
- All security checks (user access credentials) done in Django in the back end:
  - Email validation
  - Password encryption
  - Login credentials expire after 7 days


## Featured Code Snippets
### Front End
#### The user's home page component:

```
const HomeUser = () => {
  const [currentUser, setCurrentUser] = useState({});

  // get user object.

  useEffect(() => {
    const getUser = async () => {
      const userId = getUserId();
      console.log(userId);
      const res = await getUserById(userId);
      console.log(res);
      setCurrentUser(res);
    };
    getUser();
  }, []);

  return (
    <>
      <section className='reg'>
        <div className='logo-bubble'>
          <div className=' nes-balloon from-right '>
            <h1>Drinks On Me!</h1>
          </div>
        </div>
        <div className='user-balance'>
          <p>{currentUser?.username}</p>
          <p>£{currentUser?.balance}</p>
        </div>
        <figure>
          <img src={logo} />
        </figure>
        <div className='landing'>
          <div>
            <Link to='/transfer' className='nes-btn big-butt is-success'>
              Transfer
            </Link>
          </div>
          <div>
            <Link to='/purchase' className='nes-btn big-butt is-warning'>
              Purchase
            </Link>
          </div>
          <div>
            <Link to='/transactions' className='nes-btn big-butt is-primary'>
              Transactions
            </Link>
          </div>
          <div>
            <Link to='/topup' className='nes-btn big-butt is-error'>
              Topup
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
```

### Back End
#### Credential Authentication with JWT:
```
from rest_framework.authentication import BasicAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings # for the secret key
import jwt
User = get_user_model()
class JWTAuthentication(BasicAuthentication):
    # Function is called automatically by Django as part of request pipeline
    def authenticate(self, request):
        # Get the authorization header
        header = request.headers.get('Authorization')
        # If no header is present, return None which defaults to unauthenticated
        if not header:
            return None
        # If there is no bearer header present then raise a permission denied exception which will return a HTTP 403 status code
        if not header.startswith('Bearer'):
            raise PermissionDenied({'message': 'Invalid authorization header'})
        # Get the provided bearer token from the headers
        token = header.replace('Bearer ', '')
        # Try and decode the bearer token to extract the `sub` which is the user ID
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(pk=payload.get('sub'))
        # If the token cannot be decoded then we raise a permission denied exception which will return a HTTP 403 status code
        except jwt.exceptions.InvalidTokenError:
            raise PermissionDenied({'message': 'Invalid Token'})
        # If the user cannot be found then their account may have been deleted between last obtaining a token and now, raise permission denied exception and raise a HTTP 403 status code
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'User not found'})
        # User has successfully authenticated return the user object and token as a tuple
        # They can now be accessed in views with `request.user` and `request.auth` respectively
        return (user, token)
```
#### Transfer Funds View 
```
from rest_framework import status # gives list of possible response codes
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView
from rest_framework.views import APIView # This imports rest_framework's APIView that we'll use to extend to our custom view
from rest_framework.response import Response # Response gives us a way of sending a HTTP response to the user making the request, passing back data and other information
from rest_framework.exceptions import NotFound # Import this when adding error handling, provides a default response when data is not found
from .models import * 
from .serializers import * 

# list generic view
class TransferList(ListCreateAPIView):

    # Handles all drinks
    queryset = Transfer.objects.all()

    # Choose serializer to use
    serializer_class = TransferSerializer


# get by ID generic view
class TransferDetail(RetrieveAPIView):

    # Handles all books
    queryset = Transfer.objects.all()

    # Choose serializer to use
    serializer_class = TransferSerializer

# class based views

class Transfer(APIView):
  permission_classes = [IsAuthenticated]
  def post(self, request):
    sending_user_id = request.user.id
    receiving_user_id = request.data["receiver_id"]
    transfer_amount = request.data["amount"]
    transfer_message = request.data["message"]
    print(f'sender id:{sending_user_id}')
    print(f'receiver id:{receiving_user_id}')
    sending_user = AppUser.objects.get(pk=sending_user_id)
    receiving_user = AppUser.objects.get(pk=receiving_user_id)
    print(f'sender :{sending_user}')
    print(f'receiver :{receiving_user}')
    # if int(sending_user.balance) < transfer_amount:
    #   return Response(status=402, data='insufficient balance')
    # else:
    sending_user.balance -= int(transfer_amount)
    receiving_user.balance += int(transfer_amount) 
    sending_user.save()
    receiving_user.save()
    print(f'sender :{sending_user}')
    print(f'receiver :{receiving_user}')


    return Response(status=200)
```
## Wins & Challenges
The app, while looking very simple, was deceptively complex, and I did manage to get proof of concept working for the presentation. Unfortunately, I ran out of time while working on the front end and there are still several pages that aren't completely functional. The challenge was to learn Django for a week before attempting to integrate PostgreSQL with my front end application, and working with the complexity of the interaction between front and back end. I still have a lot to learn about React. 

## Future Improvements
I would like to add Stripe payment, and get some participating pubs onboard. Also, I feel that the app would work better as mobile-native, and I am considering building it with Flutter.
