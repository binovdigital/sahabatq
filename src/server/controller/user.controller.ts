import type { UserUpdateSchemaInput } from "../schema/user.schema";
import { updatePhoneNumber } from "../service/user.service";

export const updatePhoneHandler = async ({input}: { input: UserUpdateSchemaInput}) => {
    try {
      const user = await updatePhoneNumber({id: input.uid, phone: input.phoneNumber})
      return {
        status: "success",
        data: {
          user,
        },
      };
    } catch (err) {
      throw err;
    }
  };