
import VK, {Auth} from 'react-vk';

export const LoginVK = () => {
	return (
	    <VK apiId={8136098}>
	      <Auth options={{
	              onAuth: (user: any) => {
	                console.log(user);
	              },
            }}/>
	    </VK>
	)
};

export default LoginVK;