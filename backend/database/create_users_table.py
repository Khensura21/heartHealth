import sqlite3


# TABLE_ALREADY_EXISTS_ERR_MSG = open("error_msg_tables.txt", "r").read()


def table_exist(tablename):
    # Write logic to check if the table already exists in the 
    # sqlite3 database
    return True


def create_users_table(dbname="database.db"):
    sql_cmd = ""

    with open("users_table.txt", "r") as sql_cmd_file:
        sql_cmd = sql_cmd_file.read()
    
    with sqlite3.connect(dbname) as connection:
        cursor = connection.cursor()
        # `users` shoudn't be hardcoded. ideally you can get this table name from the users_table.txt
        # file
        if table_exist("users"):
            # print(TABLE_ALREADY_EXISTS_ERR_MSG)
            return False
        cursor.execute(sql_cmd)
        connection.commit()

    return True


if __name__ == "__main__":
    if create_users_table("heart_health.db"):
        print("Table Created Successfully...")
