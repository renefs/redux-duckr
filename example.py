allowed_ips = ["1234", "4321"]
allowed_ips_pref = ["::ffff:"+ip for ip in allowed_ips]
test = "1234"
print(allowed_ips)
print(allowed_ips_pref)
print("Hello world")

if test in allowed_ips or test in allowed_ips_pref:
  print("It is")

if "::ffff:"+test in allowed_ips or "::ffff:"+test in allowed_ips_pref:
  print("It is TOO")


if "::ffff:3333" in allowed_ips or test in allowed_ips_pref:
  print("It shouldn be")